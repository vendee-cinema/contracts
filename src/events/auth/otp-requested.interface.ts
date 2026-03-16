export interface OtpRequestedEvent {
  identifier: string;
  type: 'PHONE' | 'EMAIL';
  code: string;
}
