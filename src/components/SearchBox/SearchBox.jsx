import css from './SearchBox.module.css'


const SearchBox =({value, onChange}) => {
   return (<div className={css.wrapper}>
    <p className={css.title}>Find contacts by name</p>
        
 <input type="text" value={value} onChange={onChange} className={css.input} />
    </div>
)
}

export default SearchBox