import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { AwsProvider } from '@cdktf/provider-aws/lib/provider';
import { S3Bucket } from '@cdktf/provider-aws/lib/s3-bucket';

export class BackupStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, 'AWS', {});

    new S3Bucket(this, 'backup-s3', {
      bucket: 'kawakawaryuryu-synology-backup',
      lifecycleRule: [
        {
          enabled: true,
          transition: [
            {
              storageClass: 'DEEP_ARCHIVE'
            }
          ]
        }
      ]
    });
  }
}
