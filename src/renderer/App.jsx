import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ipcRenderer } from 'electron';


openDialog = () => {
  console.log('OPEN DIALOG IS CLICKED');
  ipcRenderer.invoke('app:on-fs-dialog-open').then(() => {
    ipcRenderer.invoke('app:get-files').then((files = []) => {
      console.log(files);
    });
  });
};

const Crud = () => {
  return (
    <div>
      <div id='uploader' className='app__uploader'>
        <div className='app__uploader__icon-area'>
            <img src='../assets/upload.svg' className='app__uploader__icon-area__icon' />
            <p className='app__uploader__icon-area__text'>Drag file(s) to add</p>
        </div>
        <div className='app__uploader__button-area'>
            <button className='app__uploader__button-area__button' onClick={() => openDialog()}>Click To Add Files</button>
        </div>
      </div>
        <div id='filelist' className='app__files'></div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Crud} />
      </Switch>
    </Router>
  );
}
