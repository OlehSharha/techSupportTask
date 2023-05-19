/*
1 TASK:
В лісі живе популяція їжаків. Їжачки тут можуть бути лише одного з трьох кольорів - червоного, зеленого та синього. Коли зустрічаються два їжачки різних кольорів,
 вони можуть змінити свій колір на третій (тобто, коли зустрічаються червоний і синій їжачок, вони обидва можуть стати зеленими). Іншого способу змінити свій колір у їжаків немає (зокрема, коли зустрічаються червоний і синій їжачок, вони не можуть стати обоє червоними, можна припустити лише третій колір).
Їжачки хочуть стати одного певного кольору. Вони можуть планувати свої зустрічі, щоб досягти цієї мети.
 Їжачки хочуть знати, як швидко можна досягти своєї мети (якщо її взагалі можна досягнути).

Вхідні дані:
Колір задано цілим числом, 0 - червоний, 1 - зелений, 2 - синій. Початкова популяція їжаків задана у вигляді масиву з трьох цілих чисел з індексом, що відповідає кольору (тобто [8, 1, 9] означає 8 червоних, 1 зелених і 9 синіх їжачка). Всі числа невід'ємні, їх сума знаходиться між 1 та int.MaxValue (максимально можливе значення для типу int, іншими мовами). Бажаний колір задається цілим числом від 0 до 2.

Виведіть:
Код повинен повернути мінімальну кількість зустрічей, необхідних для зміни всіх їжачків у заданий колір, або -1, якщо це неможливо (наприклад, якщо всі їжачки спочатку одного кольору).
*/


function minMeetings(population, targetColor) {
	const queue = [[population, 0]];
	const visited = new Set([JSON.stringify(population)]);

	while (queue.length > 0) {
	  const [currentPopulation, meetings] = queue.shift();

	  if (currentPopulation[targetColor] === currentPopulation.length) {
		return meetings;
	  }

	  for (let i = 0; i < currentPopulation.length; i++) {
		for (let j = i + 1; j < currentPopulation.length; j++) {
		  if (currentPopulation[i] > 0 && currentPopulation[j] > 0) {
			const newPopulation = [...currentPopulation];
			newPopulation[i]--;
			newPopulation[j]--;
			newPopulation[targetColor]++;

			if (!visited.has(JSON.stringify(newPopulation))) {
			  queue.push([newPopulation, meetings + 1]);
			  visited.add(JSON.stringify(newPopulation));
			}
		  }
		}
	  }
	}

	return -1;
  }

  const population = [8, 1, 9];
  const targetColor = 1;
  const minMeetingsCount = minMeetings(population, targetColor);

  if (minMeetingsCount === -1) {
	console.log("Цільовий колір недосяжний.");
  } else {
	console.log("Мінімальна кількість зустрічей: ", minMeetingsCount);
  }



