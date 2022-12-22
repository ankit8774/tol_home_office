

export class addBusinessModel {

    // public  token : any = null
    public businessId = null
    // public mobile: any = null
    // public email: any = null
    // public businessName: any = null
    // public businessLegalName: any = null
    // public businessIcon: any = null
    // public businessLogo: any = null
    // public GSTIN: any = null
    // public address: any = null
    // public city: any = null
    // public state: any = null
    public country: any = null
    // public zipCode: any = null
    // public latitude: any = null
    // public longitude: any = null


public businessName: any = null
public businessLegalName: any = null
public businessIcon: any = null
public businessLogo: any = null
public mobile: any = null
public email: any = null
public GSTIN: any = null
public address: any = null
public locality: any = null
public city: any = null
public state: any = null
public zipCode: any = null
public latitude: any = null
public longitude: any = null
public language: any = null

    
}



export class addLocationModel {
    public locationId:any =null
    public businessId: any = null
    public userId: any = null
    public mobile: any = null
    public email: any = null
    public locationName: any = null
    
    public businessName: any = null
    public businessLegalName: any = null
    public businessIcon: any = null
    public businessLogo: any = null
    public GSTIN: any = null
    public address: any = null
    public city: any = null
    public state: any = null
    public country: any = null
    public zipCode: any = null
    public latitude: any = null
    public longitude: any = null
    public typeId:any = null
}
export class addlocationParams {
    public businessId: any = null
    public userId: any = null
    public mobile: any = null
    public email: any = null
    public locationId:any =null
    public locationName: any = null
    public businessName: any = null
    public businessLegalName: any = null
    public businessIcon: any = null
    public businessLogo: any = null
    public GSTIN: any = null
    public address: any = null
    public city: any = null
    public state: any = null
    public country: any = null
    public zipCode: any = null
    public latitude: any = null
    public longitude: any = null
}

export class requestGetParams {

    public businessId: any = null
    
}
export class locationGetModel {
    public locationId: any = null
}

export class createLocationModel {
    public businessId: any = null
public locationId:any=null
    public locationName: any = null
    public businessLegalName: any = null
    public locationIcon: any = null
    public locationLogo: any = null
    public GSTIN: any = null
    public mobile: any = null
    public email: any = null
    public address: any = null
    public city: any = null
    public state: any = null
    public country: any = null
    public zipCode: any = null
    public latitude: any = null
    public longitude: any = null
}

export class addCustomerModel {
    public customerId: any = null
    public firstName: any = null
    public middleName: any = null
    public lastName: any = null
    public profilePic: any = null

    public locationId: any = null
    public mobile: any = null
    public email: any = null
    public locationName: any = null
    public tokken: any = null
    public accountStatus: any = null
    public isEmailVerified: any = null
    public isMobileVerified: any = null
    public userAppLanguage: any = 'php'
    public address: any = null
    public city: any = null
    public state: any = null
    public country: any = null
    public zipCode: any = null
    public language: any = null
    public dialingCode: any = null
    public status: any = null
    // public  longitude: any= null
    //customerId:3
    // locationId:2
    // mobile:4444444444
    // email:44@gmail.com
    // dialingCode:199
    // password:123456
    // token:132
    // accountStatus:1
    // isEmailVerified:1
    // isMobileVerified:0
    // userAppLanguage:php
    // language:enh
    // firstName:ankit
    // middleName:kumar
    // lastName:srivastav
    // profilePic:null
    // status:active
}

export class addUserModel{
    public userDetailsId:any =null
    public userId:any =null
    public typeId:any=null
    public businessId:any=null

    public firstName: any = null
    public middleName: any = null
    public lastName: any = null
    public profilePic: any = null

    public locationId: any = null
    public mobile: any = null
    public email: any = null
    public locationName: any = null
    public tokken: any = null
    public accountStatus: any = null
    public isEmailVerified: any = null
    public isMobileVerified: any = null
    public userAppLanguage: any = 'php'
    public address: any = null
    public city: any = null
    public state: any = null
    public country: any = null
    public zipCode: any = null
    public language: any = null
    public dialingCode: any = null
    public status: any = null
}

export class branchManagerModel {
    public userDetailsId:any =null
    public firstName: any = null
    public middleName: any = null
    public lastName: any = null
    public profilePic: any = null
    public locationId: any = null
    public mobile: any = null
    public email: any = null
    public locationName: any = null
    public tokken: any = null
    public accountStatus: any = null
    public isEmailVerified: any = null
    public isMobileVerified: any = null
    public userAppLanguage: any = 'php'
    public address: any = null
    public city: any = null
    public state: any = null
    public country: any = null
    public zipCode: any = null
    public language: any = null
    public dialingCode: any = null
    public status: any = null
}

export class regionalHeadModel {
    public userDetailsId:any =null
    public firstName: any = null
    public middleName: any = null
    public lastName: any = null
    public profilePic: any = null
    public locationId: any = null
    public mobile: any = null
    public email: any = null
    public locationName: any = null
    public tokken: any = null
    public accountStatus: any = null
    public isEmailVerified: any = null
    public isMobileVerified: any = null
    public userAppLanguage: any = 'php'
    public address: any = null
    public city: any = null
    public state: any = null
    public country: any = null
    public zipCode: any = null
    public language: any = null
    public dialingCode: any = null
    public status: any = null
}


export class AddAuditorModel {
    public firstName: any = null
    public middleName: any = null
    public lastName: any = null
    public profilePic: any = null
    public locationId: any = null
    public mobile: any = null
    public email: any = null
    public locationName: any = null
    public userId: any = null
    public userDetailsId: any  = null
    public tokken: any = null
    public accountStatus: any = null
    public isEmailVerified: any = null
    public isMobileVerified: any = null
    public userAppLanguage: any = 'php'
    public address: any = null
    public city: any = null
    public state: any = null
    public country: any = null
    public zipCode: any = null
    public language: any = null
    public dialingCode: any = null
    public status: any = null
}


export class answerModel {
    public answerId: any = null
    public questionId: any = 1
    public short_answer: any = null
    public exact_location: any = null
    public obesrvation: any = null
    public recomendation: any = null
    public description:any =null

}