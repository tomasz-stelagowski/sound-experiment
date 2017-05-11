export class Question {
	url: string;
	title: string;
	answer: string;
	left_sound: string;
	right_sound: string;

	copy(values?): Question {
		values = values || {};
	
		let question = new Question();
		question.url = values.url || this.url;
		question.title = values.title || this.title;
		question.answer = values.answer || this.answer;
		question.left_sound = values.left_sound || this.left_sound;
		question.right_sound = values.right_sound || this.right_sound;
		return question;
	}

	static fromJson(json, defaults?): Question{
		defaults = defaults ? defaults : {};

		let question = new Question();

		question.url = defaults.url || json.url;
		question.title = defaults.title || json.title;
		question.left_sound = defaults.left || json.left;
		question.right_sound = defaults.right || json.right;

		return question;
	}
}