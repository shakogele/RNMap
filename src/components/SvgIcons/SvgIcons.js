import Svg,{
    G,
    Path,
    Polygon,
    TSpan,
    Line,
    Circle,
    Polyline,
    Ellipse,
    Rect,
} from 'react-native-svg';
import React from 'react';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const SvgIcons = ({icon, width, height, styles, strokeColor, fillColor, strokeWidth}) => {

  icon = icon || 'marker';
  width = scale(width) || scale(50);
  height = scale(height) || scale(50);
  styles = styles || { flex: 1, textAlign: 'center', alignItems: 'center', justifyContent: 'center'};
  strokeColor = strokeColor || '#333';
  fillColor = fillColor || '#333';
  strokeWidth = strokeWidth || 0.5;

  let viewBox = `0 0 ${width} ${height}`;
  let icons = [];

  icons['arrowLeft'] = (
    <Svg
      viewBox="0 0 9.19 17.2"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M8.18.16A.55.55,0,0,1,9,.94L8.18.16Zm-8,8,8-8L9,.94l-8,8H.16V8.18ZM.94,9a.55.55,0,0,1-.78-.78L.94,9ZM8.25,17,.16,9l.78-.78L9,16.26,8.25,17ZM9,16.26a.55.55,0,0,1-.78.78Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['arrowRight'] = (
    <Svg
      viewBox="0 0 9.19 17.2"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M.23.94A.55.55,0,0,1,1,.16L.23.94Zm8,8-8-8L1,.16l8,8V9ZM9,8.18A.55.55,0,0,1,8.25,9L9,8.18ZM.16,16.26,8.25,8.18,9,9,.94,17l-.78-.78ZM.94,17a.55.55,0,0,1-.78-.78Z"/>
        </G>
      </G>
    </Svg>
  );

  icons['marker'] = (
    <Svg
      viewBox="0 0 17.99 29.16"
      height={height}
      width={width}
      style={styles}>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1" data-name="Layer 1">
          <Path
            stroke = {strokeColor}
            fill = {fillColor}
            strokeWidth = {strokeWidth}
            d="M9,0A9,9,0,0,0,0,9c0,5,9,20.12,9,20.12S18,14,18,9A9,9,0,0,0,9,0ZM9,12.29H9a4,4,0,1,1,4-4A4,4,0,0,1,9,12.29Z"/>
        </G>
      </G>
    </Svg>
  );

  return icons[icon];

}

export default SvgIcons;
