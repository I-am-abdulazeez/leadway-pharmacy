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
  Pharmacyid: string;
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
};

export type Delivery = {
  DeliveryFrequency: string;
  DelStartDate: string;
  NextDeliveryDate: string;
  DiagnosisLines: Diagnosis[];
  ProcedureLines: Procedure[];
  Username: string;
  AdditionalInformation: string;
  IsDelivered: boolean;
  EnrolleeId: string;
  EnrolleeName: string;
  EnrolleeAge: number;
  SchemeName: string;
  SchemeId: string;
  FrequencyDuration: string;
  EndDate: string;
  Pharmacyid: string;
  PharmacyName: string;

  EntryNo?: number;
  DeliveryId?: string;
};

export type DeliveryData = {
  Deliveries: Delivery[];
};

export type DeliveryApiResponse = {
  entryno: number;
  deliveryid: string;
  deliveryfrequency: string;
  delStartdate: string;
  nextdeliverydate: string;
  diagnosisname: string;
  diagnosis_id: string;
  procedurename: string;
  procdeureid: string;
  procedurequantity: number;
  username: string;
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
};
