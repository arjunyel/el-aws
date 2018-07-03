import { Injectable } from '@angular/core';

import { config } from '../../../config';

/**
 * Model path information
 */

export interface PathInfo {
  bucket: string;
  directory: string;
  filename: string;
  isBucket: boolean;
  isDirectory: boolean;
  isFile: boolean;
  isFileVersion: boolean;
  isRoot: boolean;
  prefix: string;
  version: string;
}

/**
 * S3 path service
 */

@Injectable()
export class PathService {

  /** 
   * Analyze a path and return its components 
   * 
   * NOTE: bucket/dir/dir/filename?versionid=version
   */
  analyze(path: string): PathInfo {
    const info = { } as PathInfo;
    // special case: root path
    if (!path || (path === config.s3Delimiter)) {
      info.isDirectory = true;
      info.isRoot = true;
      info.directory = config.s3Delimiter;
    }
    else {
      // eliminate any initial /
      if (path.startsWith(config.s3Delimiter))
        path = path.substring(1);
      // extract any version
      const param = '?versionid=';
      let ix = path.indexOf(param);
      if (ix !== -1) {
        info.version = path.substring(ix + param.length);
        info.isFileVersion = true;
        path = path.substring(0, ix);
      }
      // split around / into parts
      ix = path.indexOf(config.s3Delimiter);
      if (ix === -1) {
        info.bucket = path;
        info.isBucket = true;
      }
      else {
        info.bucket = path.substring(0, ix);
        info.prefix = path.substring(ix + 1);
        // just a directory
        if (path.endsWith(config.s3Delimiter)) {
          info.isDirectory = true;
          info.directory = path;
          if (!info.prefix) 
            info.isBucket = true;
        }
        // or a directory and a file
        else {
          info.isFile = true;
          ix = path.lastIndexOf(config.s3Delimiter);
          info.directory = path.substring(0, ix + 1);
          info.filename = path.substring(ix + 1);
        }
      }
    }
    return info;
  }

}