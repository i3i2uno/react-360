/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TouchableHighlight
 * @flow
 */

const React = require('React');
const VRBUTTON = require('VrButton');

class TouchableHighlight extends React.Component {
  render() {
    return <VRBUTTON {...this.props} onClick={this.props.onPress} />;
  }
}

module.exports = TouchableHighlight;
