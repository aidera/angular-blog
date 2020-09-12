export interface FirebaseAuthResponse {
  idToken: string;
  displayName: string;
  email: string;
  kind: string;
  localId: string;
  expiresIn: string;
  refreshToken: string;
  registered: boolean;
}
