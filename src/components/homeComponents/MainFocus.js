import './MainFocus.sass';
import Title from '../Title';

function MainFocus() {
  return (
    <div className="MainFocus container">
      <Title text='Main Focus/Mission Statement' isSubTitle={true}/>
      <div className='content'>
        <article>
          <p className='number'>1</p>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
          </p>
        </article>
        <article>
          <p className='number'>2</p>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor.
          </p>
        </article>
      </div>
    </div>
  );
}

export default MainFocus;
