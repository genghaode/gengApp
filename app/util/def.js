// api根域名
// export const SERVICE_BASE = 'https://app.shijiudian.com'
export const SERVICE_BASE = 'http://localhost:7001/'

// 颜色
export const COLOR_PRIMARY = '#f04848'
export const COLOR_PRIMARY_TXT = '#fff'



export const COLOR_TITLE = '#222'
export const COLOR_INFO = '#3596e2'
export const COLOR_DEFAULT = '#999'


// 全局样式
export const FlexCenter = {alignItems: 'center', justifyContent: 'center'}
export const IconFont = {fontFamily: 'iconfont'}

export const FullFlexCenter = {
	flex: 1,
	...FlexCenter
}

export const BUTTON_PRIMARY = {
	wrap: {
		backgroundColor: COLOR_PRIMARY,
		height: 40,
		width: '100%',
		borderWidth: 1,
		borderColor: COLOR_PRIMARY,
		borderStyle: 'solid',
		flexDirection: 'row',
		...FlexCenter
	},
	txt: {
		color: '#fff',
		fontSize: 14,
		marginLeft: 4,
		marginRight: 4
	}
}

export const BUTTON_DEFAULT = {    
	wrap: {
		backgroundColor: '#fff',
		height: 40,
		width: '100%',
		borderWidth: 1,
		borderColor: COLOR_PRIMARY,
		borderStyle: 'solid',
		flexDirection: 'row',
		...FlexCenter
	},
	txt: {
		color: COLOR_PRIMARY,
		fontSize: 14,
		marginLeft: 4,
		marginRight: 4
	}
}
