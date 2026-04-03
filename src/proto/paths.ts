import { join } from 'path';

export const PROTO_PATHS = {
  ACCOUNT: join(__dirname, '../../proto/account.proto'),
  AUTH: join(__dirname, '../../proto/auth.proto'),
  BOOKING: join(__dirname, '../../proto/booking.proto'),
  CATEGORY: join(__dirname, '../../proto/category.proto'),
  HALL: join(__dirname, '../../proto/hall.proto'),
  MEDIA: join(__dirname, '../../proto/media.proto'),
  MOVIE: join(__dirname, '../../proto/movie.proto'),
  PAYMENT: join(__dirname, '../../proto/payment.proto'),
  REFUND: join(__dirname, '../../proto/refund.proto'),
  SEAT: join(__dirname, '../../proto/seat.proto'),
  SESSION: join(__dirname, '../../proto/session.proto'),
  THEATER: join(__dirname, '../../proto/theater.proto'),
  USER: join(__dirname, '../../proto/user.proto'),
} as const;
