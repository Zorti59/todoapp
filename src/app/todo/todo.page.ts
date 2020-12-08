import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  taskName: string = '';
  taskList = [];

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showPrompt() {
    const prompt = await this.alertCtrl.create({
      inputs: [
        {
          name: 'taskName',
          type: 'text',
          placeholder: 'Indiquez votre tâche',
        },
      ],
      buttons: [
        {
          text: 'Enregistrer',
          handler: data => {
          this.taskName = data.taskName;
          this.taskList.push(this.taskName);
          console.log(this.taskList);
          }
        },
        {
          text: 'Annuler',
        }
      ]
    });
    await prompt.present();
  }

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }
  deleteTask(index) {
    this.taskList.splice(index, 1);
  }
}
