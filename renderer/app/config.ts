/**
 * Common configuration settings
 */

export class Config {

  // General config

  componentOnChangeThrottle = 100;
  numParallelOps = 16;

  periods = {
    'TODAY': 'Today',
    'YESTERDAY': 'Yesterday',
    'LAST_2_DAYS': 'Last 2 days',
    'LAST_3_DAYS': 'Last 3 days',
    'LAST_7_DAYS': 'Last 7 days',
    'THIS_WEEK': 'This week',
    'LAST_WEEK': 'Last week',
    'THIS_MONTH': 'This month',
    'LAST_MONTH': 'Last month',
    'THIS_QUARTER': 'This quarter',
    'LAST_QUARTER': 'Last quarter',
    'THIS_YEAR': 'This year',
    'LAST_YEAR': 'Last year',
    'ANYTIME': 'Anytime'
  };

  regions = {
    'us-east-1': 'US East (N. Virginia)',
    'us-east-2': 'US East (Ohio)',
    'us-west-1': 'US West (N. California)',
    'us-west-2': 'US West (Oregon)',
    'ca-central-1': 'Canada (Central)',
    'eu-west-1': 'EU (Ireland)',
    'eu-central-1': 'EU (Frankfurt)',
    'eu-west-2': 'EU (London)',
    'eu-west-3': 'EU (Paris)',
    'ap-northeast-1': 'Asia Pacific (Tokyo)',
    'ap-northeast-2': 'Asia Pacific (Seoul)',
    'ap-southeast-1': 'Asia Pacific (Singapore)',
    'ap-southeast-2': 'Asia Pacific (Sydney)',
    'ap-south-1': 'Asia Pacific (Mumbai)',
    'sa-east-1': 'South America (São Paulo)',
    'us-gov-west-1': 'US Gov West 1'
  };

  resetDelay = 1500;
  setBoundsThrottle = 250;
  // @see https://www.regextester.com/94502
  urlValidationPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  // DynamoDB config

  ddb = {
    maxRetries: 10,
    maxTables: 100
  };

  // S3 config

  s3 = {
    // @see https://stackoverflow.com/questions/50480924/regex-for-s3-bucket-name
    bucketValidationPattern: /(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(({[}a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)/,
    delimiter: '/',
    maxDescs: 200,
    maxDirExtensions: 10,
    maxKeys: 100,
    maxRetries: 10,
    pathPurgeAge: 15 * 60 * 1000,
    prepareNewNameDelay: 100,
    signedURLExpiry: 60 * 60 * 1000,
    treeRefreshThrottle: 100,
    watcherThrottle: 100,

    colors: [
      'var(--mat-amber-a100)',
      'var(--mat-blue-a100)',
      'var(--mat-cyan-a100)',
      'var(--mat-deep-orange-a100)',
      'var(--mat-deep-purple-a100)',
      'var(--mat-green-a100)',
      'var(--mat-indigo-a100)',
      'var(--mat-light-blue-a100)',
      'var(--mat-light-green-a100)',
      'var(--mat-lime-a100)',
      'var(--mat-orange-a100)',
      'var(--mat-pink-a100)',
      'var(--mat-purple-a100)',
      'var(--mat-red-a100)',
      'var(--mat-teal-a100)',
      'var(--mat-yellow-a100)',
    ],

    iconByExt: {
      '3g2': 'far file-video',
      '3gp': 'far file-video',
      '7z': 'far file-archive',
      'ai': 'far file-image',
      'aif': 'far file-audio',
      'apk': 'fas cube',
      'arj': 'far file-archive',
      'asm': 'far file-code',
      'asp': 'far file-code',
      'aspx': 'far file-code',
      'avi': 'far file-video',
      'bat': 'fas microchip',
      'bin': 'fas cube',
      'bmp': 'far file-image',
      'bz': 'far file-archive',
      'bz2': 'far file-archive',
      'c': 'far file-code',
      'cbl': 'far file-code',
      'cc': 'far file-code',
      'cda': 'far file-audio',
      'cfg': 'fas cog',
      'cfm': 'far file-code',
      'cgi': 'far file-code',
      'cmd': 'fas microchip',
      'com': 'fas microchip',
      'config': 'fas cog',
      'cpp': 'far file-code',
      'cson': 'far file-code',
      'css': 'fab css3-alt',
      'csv': 'far file-excel',
      'dat': 'fas database',
      'db': 'fas database',
      'dbf': 'fas database',
      'deb': 'far file-archive',
      'desktop': 'fas cog',
      'dmg': 'fas cube',
      'doc': 'far file-word',
      'docx': 'far file-word',
      'exe': 'fas microchip',
      'f': 'far file-code',
      'flv': 'far file-video',
      'fnt': 'fas font',
      'fon': 'fas font',
      'for': 'far file-code',
      'fs': 'far file-code',
      'gem': 'far file-archive',
      'gif': 'far file-image',
      'go': 'far file-code',
      'gradle': 'far file-code',
      'groovy': 'far file-code',
      'gz': 'far file-archive',
      'gzip': 'far file-archive',
      'h': 'far file-code',
      'h264': 'far file-video',
      'hh': 'far file-code',
      'htm': 'fab html5',
      'html': 'fab html5',
      'ico': 'far file-image',
      'ini': 'fas cog',
      'iso': 'fas cube',
      'jar': 'far file-archive',
      'java': 'fab java',
      'jpeg': 'far file-image',
      'jpg': 'far file-image',
      'js': 'fab js',
      'json': 'far file-code',
      'jsp': 'far file-code',
      'less': 'fab less',
      'log': 'fas database',
      'lua': 'far file-code',
      'm4v': 'far file-video',
      'mak': 'far file-code',
      'md': 'far file-code',
      'mdb': 'fas database',
      'mid': 'far file-audio',
      'midi': 'far file-audio',
      'mkv': 'far file-video',
      'mov': 'far file-video',
      'mp4': 'far file-video',
      'mpa': 'far file-audio',
      'mpeg': 'far file-video',
      'mpg': 'far file-video',
      'old': 'fas database',
      'ogg': 'far file-audio',
      'otf': 'fas font',
      'pdf': 'far file-pdf',
      'pkg': 'far file-archive',
      'pl': 'far file-code',
      'png': 'far file-image',
      'ppt': 'far file-powerpoint',
      'pptx': 'far file-powerpoint',
      'ps': 'far file-image',
      'psd': 'far file-image',
      'py': 'fab python',
      'rar': 'far file-archive',
      'rb': 'far file-code',
      'rc': 'far file-code',
      'rm': 'far file-video',
      'rpm': 'far file-archive',
      'sass': 'fab sass',
      'sav': 'fas database',
      'scss': 'fab sass',
      'sh': 'fas microchip',
      'so': 'fas database',
      'sql': 'fas database',
      'svg': 'far file-image',
      'swf': 'far file-video',
      'tar': 'far file-archive',
      'tcl': 'far file-code',
      'tif': 'far file-image',
      'tiff': 'far file-image',
      'toast': 'fas cube',
      'ts': 'far file-code',
      'ttf': 'fas font',
      'txt': 'far file-alt',
      'vb': 'far file-code',
      'vcd': 'fas cube',
      'vob': 'far file-video',
      'wav': 'far file-audio',
      'wma': 'far file-audio',
      'wmv': 'far file-video',
      'woff': 'fas font',
      'wpl': 'far file-audio',
      'wsf': 'fas microchip',
      'xhtml': 'fab html5',
      'xls': 'far file-excel',
      'xlsx': 'far file-excel',
      'xml': 'far file-code',
      'xsd': 'far file-code',
      'xz': 'far file-archive',
      'yaml': 'far file-code',
      'yml': 'far file-code',
      'z': 'far file-archive',
      'zip': 'far file-archive',
      'zzz': 'far file'
    },

    iconByName: {
      '.config': 'fas cog',
      '.dockerignore': 'fab docker',
      '.gitattributes': 'fab github',
      '.gitignore': 'fab github',
      '.gitconfig': 'fab github',
      '.npmignore': 'fab node-js',
      '.npmrc': 'fab node-js',
      'dockerfile': 'fab docker',
    },

    metadataKeys: [
      'CacheControl',
      'ContentDisposition',
      'ContentEncoding',
      'ContentLanguage',
      'ContentType',
      'Expires',
      'WebsiteRedirectLocation'
    ]

  };


}

export const config = new Config();
