export interface Member {
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface Members {
  data: Member[];
  hasNext: boolean;
}
