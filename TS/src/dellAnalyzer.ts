import cheerio from 'cheerio';
import fs from 'fs';
import { Analyzer } from './crowller';

interface Course {
  title: string;
  count: number;
}

interface CourseResult {
  time: number;
  data: Course[];
}

interface Content {
  [propName: number]: Course[];
}

export default class DellAnalyzer implements Analyzer {
  private constructor() { }
  static instance: DellAnalyzer;
  static getInstance() {
    if (!DellAnalyzer.instance) {
      DellAnalyzer.instance = new DellAnalyzer();
    }
    return this.instance;
  }

  private getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $('.course-item');
    const courseInfo: Course[] = [];
    courseItems.map((i, element) => {
      const descs = $(element).find('.course-desc');
      const title = descs.eq(0).text();
      const count = parseInt(
        descs
          .eq(1)
          .text()
          .split('：')[1]
      );
      courseInfo.push({ title, count });
    })
    return {
      time: (new Date()).getTime(),
      data: courseInfo,
    };
  }

  private genJsonContent(courseInfo: CourseResult, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent
  }

  public analyze(html: string, filePath: string) {
    const courseResult = this.getCourseInfo(html);
    const fileContent = this.genJsonContent(courseResult, filePath);
    return JSON.stringify(fileContent);
  }

}