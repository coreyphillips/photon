import styled from "styled-components";
import _EvilIcon from "react-native-vector-icons/EvilIcons";
import _FontAwesome from "react-native-vector-icons/FontAwesome";
import _FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import _MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import _MaterialIcons from "react-native-vector-icons/MaterialIcons";
import _Fontisto from "react-native-vector-icons/Fontisto";
import _Foundation from "react-native-vector-icons/Foundation";
import _Ionicons from "react-native-vector-icons/Ionicons";
import {Card as _Card} from 'react-native-paper';
/**********************
General styles
 **********************/

export const View = styled.View`
  background-color: ${props => props.backgroundColor ? props.theme.colors[props.backgroundColor] : props.theme.colors.background};
  ${props => props.borderColor ? `border-color: ${props.theme.colors[props.borderColor]}` : null};
`;

export const Card = styled(_Card)`
  background-color: ${props => props.backgroundColor ? props.theme.colors[props.backgroundColor] : props.theme.colors.background}
`;

export const ScrollView = styled.ScrollView`
  background-color: ${props => props.backgroundColor ? props.theme.colors[props.backgroundColor] : props.theme.colors.background};
  ${props => props.borderColor ? `border-color: ${props.theme.colors[props.borderColor]}` : null};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  background-color: ${props => props.backgroundColor ? props.theme.colors[props.backgroundColor] : props.theme.colors.background};
  ${props => props.borderColor ? `border-color: ${props.theme.colors[props.borderColor]}` : null};
`;

export const Text = styled.Text`
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.text};
  fontFamily: ${props => props.font ? props.theme.fonts[props.font].fontFamily : props.theme.fonts.medium.fontFamily};
  fontWeight: ${props => props.font ? props.theme.fonts[props.font].fontWeight : props.theme.fonts.medium.fontWeight};
  ${props => props.backgroundColor ? `background-color: ${props.theme.colors[props.backgroundColor]}` : null};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor ? props.theme.colors[props.backgroundColor] : props.theme.colors.background};
  ${props => props.borderColor ? `border-color: ${props.theme.colors[props.borderColor]}` : null};
`;

export const TextInput = styled.TextInput.attrs((props) => ({
	placeholderTextColor: props.theme.colors.placeholder,
	keyboardAppearance: props.theme.themeId === "light" ? "light" : "dark"
}))`
  background-color: ${props => props.editable === false ? props.theme.colors.background : props.theme.colors.disabled};
  color: ${props => props.theme.text};
`;

export const EvilIcon = styled(_EvilIcon).attrs((props) => ({
	color: props.type ? props.theme.colors[props.type] : props.theme.colors.primary
}))`
`;

export const FontAwesome = styled(_FontAwesome).attrs((props) => ({
	color: props.type ? props.theme.colors[props.type] : props.theme.colors.primary
}))`
`;

export const FontAwesome5 = styled(_FontAwesome5).attrs((props) => ({
	color: props.type ? props.theme.colors[props.type] : props.theme.colors.primary
}))`
`;

export const MaterialCommunityIcons = styled(_MaterialCommunityIcons).attrs((props) => ({
	color: props.type ? props.theme.colors[props.type] : props.theme.colors.primary
}))`
`;

export const MaterialIcons = styled(_MaterialIcons).attrs((props) => ({
	color: props.type ? props.theme.colors[props.type] : props.theme.colors.primary
}))`
`;

export const Fontisto = styled(_Fontisto).attrs((props) => ({
	color: props.type ? props.theme.colors[props.type] : props.theme.colors.primary
}))`
`;

export const Foundation = styled(_Foundation).attrs((props) => ({
	color: props.type ? props.theme.colors[props.type] : props.theme.colors.primary
}))`
`;

export const Ionicons = styled(_Ionicons).attrs((props) => ({
	color: props.type ? props.theme.colors[props.type] : props.theme.colors.primary
}))`
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs((props) => ({
	color: props.type ? props.theme.colors[props.type] : props.theme.text
}))`
`;

/**********************
Component-specific styles
 **********************/
export const XButton = styled.View`
  background-color: ${props => props.theme.colors.background};
  border-color: ${props => props.theme.colors.primary};
  border-width: ${props => props.theme.themeId === "light" ? "3px" : "1.5px"};
`;
