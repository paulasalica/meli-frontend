import './style.scss';

const Filter = ({filters}) => {
    const string = filters.map((filter) => `${filter.name} >`).toString();
    const text = string.replaceAll('>,', '> ');
    const rowFilters = text.slice(0, text.length-1);

    return (
        <div className="filters">
            <p className="row-filters">
                {rowFilters}
            </p>
        </div>
    )
}

export default Filter;