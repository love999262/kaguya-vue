<template>
    <div className={`${this.props.prefix}-bar`}>
        <button className={`${this.props.prefix}-bar-container-btn`} onClick={() => { this.handleContainerBtnClick(); }}>{this.state.search.searchBtnName}</button>
        <ul className={`${this.props.prefix}-bar-container-dropmenu`} style={this.state.dropmenuStyle}>
            {dropList}
        </ul>
        <button className={`${this.props.prefix}-bar-container-panel`} onClick={() => { this.handleContainerPanelClick(); }}></button>
        <div>
            <input type='text' ref={(ele) => { this.input = ele; }} className={`${this.props.prefix}-bar-input`} onFocus={() => { this.handleInputFocus(); }} onBlur={() => { this.handleInputBlur(); }} onKeyDown={(e) => { this.handleSearchEvent(e); }} placeholder='Open The Door To A Whole New World!!!' value={this.state.inputVal} onChange={(e) => {this.handleInputChange(e); }} />
            <ul className={`${this.props.prefix}-bar-search-history`} style={this.state.historyPanelStyle}>
                {this.getSearchHistoryPanel()}
            </ul>
        </div>
        <button className={`${this.props.prefix}-bar-btn`} onClick={(e) => { this.handleSearchEvent(e); }} style={this.state.searchBtnStyle}></button>
    </div>
</template>

<script>
export default {
}
</script>


<style>

</style>
