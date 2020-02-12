 export class currentUserModel {
  id: string;
  ttl: number;
  created: string;
  userId: number;
  user: {
    id: any;
  firstname: any;
  lastname: any;
  profile: any;
  realm: any;
  username: any;
  password: any;
  email: any;
  emailVerified: any;
  verificationToken: any;
  memberId: any;
  user_legal_id: any;
  user_internal_id: any;
  user_photo_path: any;
  };

  constructor() {
    this.id = null;
    this.ttl = null;
    this.created = null;
    this.userId= null;
    this.user= {
      id: null,
      firstname: null,
      lastname: null,
      profile: "user",
      realm: "maprotel",
      username: null,
      password: null,
      email: null,
      emailVerified: false,
      verificationToken: null,
      memberId: null,
      user_legal_id: null,
      user_internal_id: null,
      user_photo_path: null,
    }
  }

}