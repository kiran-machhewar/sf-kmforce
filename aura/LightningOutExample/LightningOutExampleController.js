({
	initialize : function(component, event, helper) {
		var action = component.get("c.getContacts");
        var self = this;
        action.setCallback(this, function(a) {
            var contacts = a.getReturnValue();            
            component.set("v.contacts", contacts);             
            console.log('Contacts are loaded.');
        });
        $A.enqueueAction(action);
	},

	callExternalFunction : function(component, event, helper){
		console.log('Inside lightning controller function-->callExternalFunction');
		var lightningAppExternalEvent = $A.get("e.c:lightningAppExternalEvent");
	    lightningAppExternalEvent.setParams({'data':component.get('v.contacts')});
	    lightningAppExternalEvent.fire();
	},

	lightningAppEventHandler : function(component, event, helper){
		console.log('Inside lightning controller function-->lightningAppEventHandler');		
		console.log('Value of TestDataKey',event.getParam('data').TestDataKey);
		
	}
})