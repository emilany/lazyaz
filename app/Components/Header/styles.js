import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $backgroundColor: '$white',
  topContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginVertical: '20rem',
    marginHorizontal: '10rem',
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    marginHorizontal: '5rem',
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small,
    letterSpacing: 1,
    color: '$white',
  },
  locationText: {
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    color: '$primaryColor',
  },
  image: {
    resizeMode: 'contain',
  },
});

export default styles;