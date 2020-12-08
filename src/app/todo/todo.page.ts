import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  taskName: any = '';
  taskList = [];

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showPrompt() {
    const prompt = await this.alertCtrl.create({
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Indiquez votre tâche'
        },
      ],
      buttons: [
        {
          text: 'Enregistrer',
          handler: (click) => {
            ;
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
  deleteTask(i) {
    this.taskList.splice(i, 1);
  }
}
