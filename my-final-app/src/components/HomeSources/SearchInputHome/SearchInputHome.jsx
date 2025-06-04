import styles from './SearchInputHome.module.css'
import searchBtnHome from '../../../assets/searchBtnHome.png'

function Search() {
  return (
    <form className={styles.searchForm}>
        <input type='text' placeholder='Search location...' className={styles.searchInputHome} />
        <button className={styles.searchBtnHome}><img src={searchBtnHome} alt='searchBtnHome'/></button>
    </form>
  );
}

export default Search;
