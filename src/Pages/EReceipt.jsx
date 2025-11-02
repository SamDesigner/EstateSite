import { useState, useEffect, useRef } from 'react';
import './EReceipt.css';

const EReceipt = () => {
  const [items, setItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [amountWords, setAmountWords] = useState('Zero Naira Only');
  const [clientBusinessName, setClientBusinessName] = useState('');
  const [refField, setRefField] = useState('');
  const [invoiceSubject, setInvoiceSubject] = useState('');
  const [docHeader, setDocHeader] = useState('INVOICE FOR PROFESSIONAL SERVICE FEE');
  const [companyLogo, setCompanyLogo] = useState('');
  
  const sigPadRef = useRef(null);
  const canvasRef = useRef(null);

  // Utility: format number as Nigerian Naira string
  const formatNaira = (n) => {
    if (isNaN(n) || !isFinite(n)) n = 0;
    return Number(n).toLocaleString('en-NG', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Number to words for Naira and Kobo (English)
  const nairaInWords = (amount) => {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    const toWordsBelowThousand = (num) => {
      let word = '';
      if (num >= 100) {
        word += ones[Math.floor(num / 100)] + ' Hundred';
        num %= 100;
        if (num) word += ' and ';
      }
      if (num >= 20) {
        word += tens[Math.floor(num / 10)];
        if (num % 10) word += ' ' + ones[num % 10];
      } else if (num > 0) {
        word += ones[num];
      }
      return word;
    };

    const intToWords = (num) => {
      if (num === 0) return 'Zero';
      const scales = ['', ' Thousand', ' Million', ' Billion', ' Trillion'];
      let words = '';
      let scaleIdx = 0;
      while (num > 0) {
        const chunk = num % 1000;
        if (chunk) {
          const chunkWords = toWordsBelowThousand(chunk) + scales[scaleIdx];
          words = chunkWords + (words ? ' ' + words : '');
        }
        num = Math.floor(num / 1000);
        scaleIdx++;
      }
      return words.trim();
    };

    amount = Number(amount) || 0;
    const naira = Math.floor(amount);
    const kobo = Math.round((amount - naira) * 100);
    let out = (naira === 0 ? 'Zero' : intToWords(naira)) + ' Naira';
    if (kobo > 0) out += ' and ' + intToWords(kobo) + ' Kobo';
    return out + ' Only';
  };

  // Initialize with default rows
  useEffect(() => {
    if (items.length === 0) {
      addRow();
      addRow();
    }
  }, []);

  // Calculate total when items change
  useEffect(() => {
    let sum = 0;
    items.forEach(item => {
      const num = parseFloat(item.value) || 0;
      sum += num;
    });
    setGrandTotal(sum);
    setAmountWords(nairaInWords(sum));
  }, [items]);

  // Set today's date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB');
    // You can set this in state if needed
  }, []);

  const addRow = () => {
    const newItem = {
      id: Date.now(),
      serial: items.length + 1,
      specification: '',
      agencyFee: '',
      value: ''
    };
    setItems([...items, newItem]);
  };

  const removeRow = (id) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      const updatedItems = items.filter(item => item.id !== id);
      // Renumber items
      const renumberedItems = updatedItems.map((item, index) => ({
        ...item,
        serial: index + 1
      }));
      setItems(renumberedItems);
    }
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  // Auto-resize textarea functionality
  const handleTextareaResize = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const clearAllRows = () => {
    if (window.confirm('Are you sure you want to clear all rows? This action cannot be undone.')) {
      setItems([]);
    }
  };

  // Signature pad functionality
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let drawing = false;
    let last = null;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const temp = document.createElement('canvas');
      temp.width = canvas.width;
      temp.height = canvas.height;
      temp.getContext('2d').drawImage(canvas, 0, 0);
      canvas.width = rect.width;
      canvas.height = 120;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#333';
      ctx.drawImage(temp, 0, 0, temp.width, temp.height, 0, 0, canvas.width, canvas.height);
    };

    const pos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      return {
        x: t.clientX - rect.left,
        y: t.clientY - rect.top
      };
    };

    const start = (e) => {
      drawing = true;
      last = pos(e);
    };

    const move = (e) => {
      if (!drawing) return;
      const p = pos(e);
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      last = p;
    };

    const end = () => {
      drawing = false;
    };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);
    canvas.addEventListener('touchstart', (e) => {
      start(e);
      e.preventDefault();
    });
    canvas.addEventListener('touchmove', (e) => {
      move(e);
      e.preventDefault();
    });
    canvas.addEventListener('touchend', (e) => {
      end(e);
      e.preventDefault();
    });

    window.addEventListener('resize', resize);
    setTimeout(resize, 0);

    return () => {
      canvas.removeEventListener('mousedown', start);
      canvas.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', end);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = 120;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
      const w = img.width * ratio;
      const h = img.height * ratio;
      ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    };
    img.src = URL.createObjectURL(file);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const imgUrl = URL.createObjectURL(file);
    setCompanyLogo(imgUrl);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="ereceipt-container">
      <div className="invoice-paper">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-4 top-meta">
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
            <div className="d-flex flex-column align-items-start">
              <img 
                id="companyLogo" 
                className="brand-mark mb-3" 
                alt="Company Logo"
                src={companyLogo || ''}
                style={{ 
                  background: companyLogo ? 'transparent' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  borderRadius: '12px',
                  padding: companyLogo ? '0' : '10px'
                }}
              />
              <input 
                className="form-control" 
                style={{ maxWidth: '280px', fontSize: '14px' }}
                placeholder="Client / Customer Business Name"
                value={clientBusinessName}
                onChange={(e) => setClientBusinessName(e.target.value)}
              />
            </div>
          </div>
          <div className="text-md-end w-100 w-md-auto">
            <div 
              className="doc-title" 
              contentEditable 
              suppressContentEditableWarning={true}
              onBlur={(e) => setDocHeader(e.target.textContent)}
            >
              Invoice
            </div>
            <div className="mt-3" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              <span className="fw-semibold" style={{ color: 'var(--primary-color)' }}>Date:</span> 
              <span className="ms-2">{new Date().toLocaleDateString('en-GB')}</span>
            </div>
            <div className="mt-2" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              <span className="fw-semibold" style={{ color: 'var(--primary-color)' }}>Ref:</span> 
              <input 
                className="form-control d-inline-block ms-2" 
                style={{ width: '240px', fontSize: '14px' }}
                placeholder="Enter reference"
                value={refField}
                onChange={(e) => setRefField(e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Project / Title line (editable) */}
        <div className="mb-4">
          <div 
            className="fw-bold mb-3" 
            contentEditable 
            suppressContentEditableWarning={true}
            onBlur={(e) => {
              setDocHeader(e.target.textContent);
              e.target.style.borderColor = 'transparent';
            }}
            style={{ 
              color: 'var(--primary-color)', 
              fontSize: '18px',
              border: '2px dashed transparent',
              padding: '8px',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
          >
            {docHeader}
          </div>
          <input 
            className="form-control" 
            placeholder="Describe the service, job, or property (editable)"
            value={invoiceSubject}
            onChange={(e) => setInvoiceSubject(e.target.value)}
            style={{ fontSize: '14px', padding: '12px' }}
          />
        </div>

        {/* Line Items Table */}
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th style={{ width: '70px' }}>S/N</th>
                <th contentEditable suppressContentEditableWarning={true} title="Click to rename column">
                  Specification
                </th>
                <th style={{ width: '28%' }} contentEditable suppressContentEditableWarning={true} title="Click to rename column">
                  Agency Fee
                </th>
                <th style={{ width: '22%' }} className="text-end" contentEditable suppressContentEditableWarning={true} title="Click to rename column">
                  Value (₦)
                </th>
                <th style={{ width: '52px' }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input 
                      className="form-control" 
                      value={item.serial}
                      readOnly
                      aria-label="Serial Number"
                    />
                  </td>
                  <td>
                    <textarea 
                      className="form-control auto-resize" 
                      rows="2" 
                      placeholder="Describe item or service"
                      value={item.specification}
                      onChange={(e) => updateItem(item.id, 'specification', e.target.value)}
                      onInput={handleTextareaResize}
                    />
                  </td>
                  <td>
                    <textarea 
                      className="form-control auto-resize" 
                      rows="2" 
                      placeholder="e.g., 10% agency fee"
                      value={item.agencyFee}
                      onChange={(e) => updateItem(item.id, 'agencyFee', e.target.value)}
                      onInput={handleTextareaResize}
                    />
                  </td>
                  <td className="text-end">
                    <input 
                      className="form-control value-input" 
                      inputMode="decimal" 
                      placeholder="0.00"
                      value={item.value}
                      onChange={(e) => updateItem(item.id, 'value', e.target.value)}
                    />
                  </td>
                  <td className="text-center">
                    <button 
                      className="btn btn-outline-danger btn-sm remove-row" 
                      title="Remove this row"
                      onClick={() => removeRow(item.id)}
                      style={{ 
                        width: '32px', 
                        height: '32px', 
                        padding: '0',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <i className="fa fa-trash" style={{ fontSize: '12px' }}></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-end">TOTAL</td>
                <td className="text-end totals">
                  <span className="currency-prefix">₦</span>
                  <span>{formatNaira(grandTotal)}</span>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="action-buttons">
          <button 
            className="btn btn-outline-primary btn-sm px-3 py-2" 
            onClick={addRow}
            style={{
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              border: '2px solid var(--primary-color)',
              color: 'var(--primary-color)',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--primary-color)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--primary-color)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <i className="fa fa-plus me-2"></i> Add Row
          </button>
          <button 
            className="btn btn-outline-danger btn-sm px-3 py-2" 
            onClick={clearAllRows}
            style={{
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              border: '2px solid var(--brand-red)',
              color: 'var(--brand-red)',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--brand-red)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--brand-red)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <i className="fa fa-trash me-2"></i> Clear All Rows
          </button>
        </div>

        {/* Amount in words */}
        <div className="mb-4">
          <div className="fw-semibold mb-2" style={{ color: 'var(--primary-color)', fontSize: '16px' }}>AMOUNT IN WORDS:</div>
          <div className="amount-words">
            {amountWords}
          </div>
        </div>

        {/* Transfer / Bank details */}
        <div className="mb-4">
          <div className="fw-semibold mb-3" style={{ color: 'var(--primary-color)', fontSize: '16px' }}>Make all Payments / Transfers as stated herein:</div>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead>
                <tr>
                  <th style={{ width: '70px' }}>S/N</th>
                  <th>DESCRIPTION</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-bold">1</td>
                  <td className="fw-semibold">NAME OF BANK</td>
                  <td>Fidelity Bank PLC</td>
                </tr>
                <tr>
                  <td className="fw-bold">2</td>
                  <td className="fw-semibold">ACCOUNT NAME</td>
                  <td>Asset Allocators Limited</td>
                </tr>
                <tr>
                  <td className="fw-bold">3</td>
                  <td className="fw-semibold">ACCOUNT NUMBER</td>
                  <td className="fw-bold" style={{ color: 'var(--primary-color)', fontSize: '16px' }}>4010886606</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Signatures */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="fw-semibold mb-3" style={{ color: 'var(--primary-color)', fontSize: '16px' }}>Customer's Signature</div>
          </div>
          <div className="col-md-6">
            <div className="fw-semibold mb-3" style={{ color: 'var(--primary-color)', fontSize: '16px' }}>For: Asset Allocators Limited</div>
            <div className="sig-box">
              <canvas ref={canvasRef} id="sigPad"></canvas>
            </div>
            <div className="sig-tools">
              <button className="btn btn-sm btn-outline-secondary" onClick={clearSignature}>
                <i className="fa fa-eraser"></i> Clear
              </button>
              <label className="btn btn-sm btn-outline-primary mb-0">
                <i className="fa fa-upload"></i> Upload Signature
                <input 
                  type="file" 
                  accept="image/*" 
                  hidden
                  onChange={handleSignatureUpload}
                />
              </label>
              <label className="btn btn-sm btn-outline-secondary mb-0">
                <i className="fa fa-image"></i> Upload Logo
                <input 
                  type="file" 
                  accept="image/*" 
                  hidden
                  onChange={handleLogoUpload}
                />
              </label>
              <button className="btn btn-sm btn-success ms-auto" onClick={handlePrint}>
                <i className="fa fa-print"></i> Print / Save
              </button>
            </div>
          </div>
        </div>

        <div className="company-info">
          <div className="fw-bold">Asset Allocators Limited</div>
          <div>27A Providence Street, Lekki, Lagos</div>
          <div>Telephone: 08033064524, 08087185200</div>
          <div>Email: info@assetallocatorsltd.com</div>
        </div>
      </div>
    </div>
  );
};

export default EReceipt;
