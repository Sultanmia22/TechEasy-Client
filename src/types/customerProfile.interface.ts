export interface IPersonalInfoFields {
    fullName: string;
    email: string;
    phone: string;
    altPhone: string;
    dateOfBirth: string;
    gender: string;
    occupation: string;
    nidNumber: string;
    location: string;
}

export interface InfoModalProps {
  initialData?: IPersonalInfoFields;
  refetch?: () => void;
}