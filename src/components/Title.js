import './Title.sass';

// GUIDE
// text = string
// isSubTitle = boolean

function Title({text = ' ', isSubTitle}) {

  let newTitle = text.split(' ');

  return (
    <div className='Title'>
      {
        (isSubTitle) ?
        <h1>{text}</h1> :
        <><h1>{newTitle[0]}</h1><h1>{newTitle[1]}</h1></>
      }
    </div>
  );
}

export default Title;
