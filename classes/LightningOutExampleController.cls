public with sharing class LightningOutExampleController {
    public LightningOutExampleController() {

    }

    @AuraEnabled
    public static List<Contact> getContacts(){
        return [SELECT Id, Name From Contact ];
    }
}