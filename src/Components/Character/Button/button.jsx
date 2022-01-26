import './button.css'

function Button(props){
    
    const {name, onChange, Pagination} = props;
    const handleChange = () => {
        onChange()
    }
    return(
    <>{Pagination?<button onClick={handleChange}>{name}</button>:null}
    </>
    );
}
export default Button