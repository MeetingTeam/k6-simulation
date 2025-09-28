export function randomString(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomBool() {
  return Math.random()<0.5;
}