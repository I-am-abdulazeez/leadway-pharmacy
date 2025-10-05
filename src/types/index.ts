import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type BaseForm = {
  email: string;
  password: string;
};

export type User = {
  Id: string;
  UserName: string;
  PasswordHash: string;
  SecurityStamp: string;
  Discriminator: string;
  Email: string;
  Emailconfirmed: boolean;
  Phonenumber: string;
  Phonenumberconfirmed: boolean;
  Twofactorenabled: boolean;
  LockoutEndDateUtc: string | null;
  LockoutEnabled: boolean;
  AccessFailedCount: number;
  insco_id: number;
  provider_id: string | null;
  surname: string;
  firstname: string;
  ModifiedDateTime: string;
  User_id: number;
  DisciplineID: string | null;
  ProfilePicture: string | null;
  ProfilePictureType: string | null;
  DateOfBirth: string | null;
  Gender: string | null;
  Street: string | null;
  CityID: string | null;
  StateID: string | null;
  CountryID: string | null;
  TitleID: string | null;
  TitleName: string | null;
  ConcurrencyStamp: string | null;
  NormalizedUserName: string;
  NormalizedEmail: string;
  LOCKOUTEND: string | null;
  EnterService: boolean | null;
  ConsultServiceEntered: boolean | null;
  RegisterInvoice: boolean | null;
  ViewInvoices: boolean | null;
  Viewaccountstatement: boolean | null;
  Manageprescribers: boolean | null;
  ManageAdministrativestaff: boolean | null;
  ManageAccount: boolean | null;
  PracticeNumber: string | null;
  fixed: string | null;
  function: string | null;
  rightofconnection: string | null;
}

export type LoginResponse = {
  status: number;
  result: User[] | null;
  ErrorMessage: string;
}

export type Provider = {
  Pharmacyid: number;
  PharmacyName: string;
};

export type Diagnosis = {
  DiagnosisId: string;
  DiagnosisName: string;
};

export type Procedure = {
  ProcedureId: string;
  ProcedureName: string;
  ProcedureQuantity: number;
  cost: string;
  DosageDescription?: string
};

export type Delivery = {
  DeliveryFrequency: string;
  DelStartDate: string;
  NextDeliveryDate: string;
  DiagnosisLines: Diagnosis[];
  ProcedureLines: Procedure[];
  Username: string;
  AdditionalInformation: string;
  DosageDescription: string;
  Comment: string;
  IsDelivered: boolean;
  EnrolleeId: string;
  EnrolleeName: string;
  EnrolleeAge: number;
  SchemeName: string;
  SchemeId: string;
  FrequencyDuration: string;
  EndDate: string;
  Pharmacyid: number;
  PharmacyName: string;
  deliveryaddress: string,
  phonenumber: string;
  recipientcode?: string;
  enrolleename?: string;
  memberstatus?: string;
  cost: string;
  Tobedeliverdby?: string;
  EntryNo?: number;
  DeliveryId?: string;
  Status?: string;
};

export type DeliveryData = {
  Deliveries: Delivery[];
};

export type DeliveryApiResponse = {
  status: number;
  result: {
    entryno: number;
    deliveryid: string;
    deliveryfrequency: string;
    delStartdate: string;
    nextdeliverydate: string;
    nextpackdate: string;
    diagnosisname: string;
    diagnosis_id: string;
    procedurename: string;
    procdeureid: string;
    procedurequantity: number;
    username: string;
    status: string
    inputteddate: string;
    modifieddate: string;
    additionalinformation: string;
    isdelivered: boolean;
    enrolleeid: string;
    enrolleename: string;
    enrollee_age: number;
    schemename: string;
    schemeid: string;
    frequencyduration: string;
    enddate: string;
    pharmacyname: string | null;
    pharmacyid: number;
    approveddate: null,
    Tobedeliverdby?: string | null;
    Packdate: null,
    enrolleeCount: number;
    scheduledcount: number,
    Deliverycount: number
  }[]
};

export type PackResponse = {
  Results: {
    DeliveryEntryNo: string
    ReturnMessage: string
    RowsAffected: number
    status: number
  }[]
}

export type DeliveredPackResponse = {
  status: number,
  ReturnMessage: string,
  TotalRowsAffected: number,
  IndividualResults: [
    {
      DeliveryEntryNo: string,
      Status: string,
      Message: string
    }
  ]
}

export interface Rider {
  rider_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  gender: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  license_number: string;
  license_expiry_date: string;
  registration_date: string;
  last_updated: string;
  status: "Active" | "Inactive" | "Suspended" | "Pending";
  profile_picture_url?: string;
  notes?: string;
}

export interface CreateRiderRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  gender: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  license_number: string;
  license_expiry_date: string;
  status: "Active" | "Inactive" | "Suspended" | "Pending";
  profile_picture_url: string;
  notes: string;
}

export interface UpdateRiderRequest extends CreateRiderRequest {
  rider_id: number;
}

export type RiderResponse = {
  success: boolean;
  message: string;
  response: Rider[]
}
