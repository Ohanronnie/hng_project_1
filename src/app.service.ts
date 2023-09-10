import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor(){};
  formatResponse(){
    const days = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday";
    const DATE = new Date();
    let [date, time] = DATE.toISOString().split('T');
    time = time.replace(/\.\d+/, '');
    return {
      slack_name: "ohanronnie",
      current_day: days.split(' ')[DATE.getDay()],
      utc_time: `${date}T${time}`,
      track: "backend",
      github_file_url: "",
      github_repo_url: "",
      status_code: 200
    }
  }
}
