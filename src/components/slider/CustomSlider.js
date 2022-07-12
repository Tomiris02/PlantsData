import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./SliderComponents";

const CustomSlider = ({values, color, colorEffectText}) => {
  const domain = [values.min, values.max];
  const defaultValues = [values.min, values.max];
  return (
    <div style={{ height: 50, width: "80%", margin: "30px auto" }}>
      <Slider
        mode={2}
        step={1}
        domain={domain}
        rootStyle={{
          position: "relative",
          width: "100%",
        }}
        values={defaultValues}
         
        
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                  color={color}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={5}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map((tick) => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
      <p style={{ padding: 40, fontSize: 12, paddingBottom: 50  }} >{colorEffectText}</p>
    </div>
  );
};

export default CustomSlider;
