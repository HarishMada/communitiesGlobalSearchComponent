({
    handleClick : function(component, event, helper) {
        var searchText = component.get('v.searchText');
        if(searchText !== '') {
            var navEvt = $A.get('e.force:navigateToURL');
            navEvt.setParams({url: '/global-search/'+searchText});
            navEvt.fire();
        }
    }
})