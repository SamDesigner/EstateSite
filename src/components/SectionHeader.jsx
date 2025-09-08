const SectionHeader = ({subtitle , title}) => {
  return (
    <div className="flex flex-col gap-[15px] justify-center items-center">
        <h3 className="text-gray-400"> {subtitle}</h3>
        <div className="divider"></div>
        <h1 className="text-[30px] text-center">{title}</h1>
    </div>
  )
}

export default SectionHeader