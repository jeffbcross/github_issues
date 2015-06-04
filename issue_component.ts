import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'issue',
  properties: {'issue': 'issue', 'compact': 'compact'}
})
@View({
  template: `
  <div>
    {{perfIcon()}}{{typeIcon()}}{{effortIcon()}}<a target="_blank" [href]="issue.html_url">{{issue.number}}</a>
    <span [hidden]="compact">
      <a target="_blank" [href]="issue.html_url">{{issue.title}}</a>
      [ {{issue.comp}} ]
    </span>
  </div>
  `
})
export class IssueComponent {
  static NOT_FOUND = '⁉';
  
  issue: Issue;
  compact = false;
  
  perfIcon() {
    switch (this.issue.priority) {
      case 'P0': return '0⃣';
      case 'P1': return '1⃣';
      case 'P2': return '2⃣';
      case 'P3': return '3⃣';
      case 'P4': return '4⃣';
      case 'P5': return '5⃣';
      default: return IssueComponent.NOT_FOUND;
    }
  }
  
  effortIcon() {
    switch (this.issue.effort) {
      case 'easy': return '▏';
      case 'medium': return '▌';
      case 'tough': return '█';
      default: return IssueComponent.NOT_FOUND;
    }
  }

  typeIcon() {
    switch (this.issue.type) {
      case 'RFC': return '❔';
      case 'bug': return '🐛';
      case 'feature': return '➕';
      case 'perf': return '📊';
      case 'refactor': return '❤';
      case 'chore': return '🔧';
      default: return IssueComponent.NOT_FOUND;
    }
  }
}

