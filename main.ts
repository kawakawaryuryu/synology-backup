import { App, CloudBackend, NamedCloudWorkspace } from 'cdktf';
import { BackupStack } from './lib/s3/backup-stack';

const app = new App();
const stack = new BackupStack(app, 'backup');
new CloudBackend(stack, {
  hostname: 'app.terraform.io',
  organization: 'kawakawaryuryu',
  workspaces: new NamedCloudWorkspace('synology-backup')
});
app.synth();
