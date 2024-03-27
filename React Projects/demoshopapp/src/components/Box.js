import './Box.css';

function Box(props){
    return(
        <div className='my-box'>
            {props.children};
        </div>
    );
}

export default Box;