/**
 * Get random number from min to max
 */
export function rand (min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}
