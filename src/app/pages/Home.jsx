import { mind } from '../../img/images';

export const Home = () => {
  return (
    <div>
      <div className='d-flex'>
        <div className='p-5 w-100'>
          <h2 className=''>Hablemos de</h2>
          <h1 className='title-page'>SALUD<br />MENTAL</h1>
        </div>
        <div className='p-2 flex-shrink-1'>
          <img src={mind} />
        </div>
      </div>

    </div>
  )
}