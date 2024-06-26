import {GL} from '@luma.gl/constants';
import type {TextureProps} from '@luma.gl/core';
import {AGGREGATION_OPERATION} from '../aggregation-operation-utils';

export const DEFAULT_RUN_PARAMS = {
  projectPoints: false,
  viewport: null,
  createBufferObjects: true,
  moduleSettings: {}
};

export const MAX_32_BIT_FLOAT = 3.402823466e38;
export const MIN_BLEND_EQUATION = [GL.MIN, GL.FUNC_ADD];
export const MAX_BLEND_EQUATION = [GL.MAX, GL.FUNC_ADD];
export const MAX_MIN_BLEND_EQUATION = [GL.MAX, GL.MIN];
export const EQUATION_MAP = {
  [AGGREGATION_OPERATION.SUM]: GL.FUNC_ADD,
  [AGGREGATION_OPERATION.MEAN]: GL.FUNC_ADD,
  [AGGREGATION_OPERATION.MIN]: MIN_BLEND_EQUATION,
  [AGGREGATION_OPERATION.MAX]: MAX_BLEND_EQUATION
};

export const ELEMENTCOUNT = 4;
export const DEFAULT_WEIGHT_PARAMS = {
  size: 1,
  operation: AGGREGATION_OPERATION.SUM,
  needMin: false,
  needMax: false,
  combineMaxMin: false
};

export const PIXEL_SIZE = 4; // RGBA32F
export const WEIGHT_SIZE = 3;

export const MAX_MIN_TEXTURE_OPTS: TextureProps = {
  format: 'rgba32float',
  mipmaps: false,
  sampler: {
    minFilter: 'nearest',
    magFilter: 'nearest'
  },
  width: 1,
  height: 1
};
