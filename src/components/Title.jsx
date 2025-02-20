// GUIDE
// text = string
// isSubTitle = boolean

function Title({text = ' ', isSubTitle, className}) {

  let newTitle = text.split(' ');

  return (
    <div className='Title'>
      {
        (isSubTitle) ?
        <h1 className={`text-[42px] leading-[0.95] text-light-gray-3 font-light sm:text-[64px] ${className}`}>{text}</h1> :
        <>
          <h1 className={`text-[42px] leading-[0.95] text-light-gray-3 font-light sm:text-[64px] ${className}`}>{newTitle[0]}</h1>
          <h1 className={`text-[42px] leading-[0.95] text-gray font-bold sm:text-[64px] ${className}`}>{newTitle[1]}</h1>
        </>
      }
    </div>
  );
}

export default Title;
