export const GAME_API_URL = 'https://api.geekdo.com/xmlapi';

export function randomGameIds() {
  let randomNumbers = [];

  for (let i = 0; i <= 70; i++) {
    let randomNumber = Math.floor(Math.random() * 5000);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}