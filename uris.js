'use strict'

//uri-friendly json notation

const uriMap =
	{to: Object.freeze ({
		',"':',',
		'":':':',
		'"':"'"
})}

const flipObj = obj =>
	Object.keys(obj).reduce ((acc, key) =>
		(acc[obj[key]] = key) && acc
	, {})

uriMap.from = Object.freeze (
	flipObj (uriMap.to)
)

const toUri = obj =>
	'#' + encodeURI (
		replaceInString (
			JSON.stringify(obj)
			.slice(2,-1),
			uriMap.to
		)
	)

const fromUri = uriString =>
	uriString.length <= 1 ? {} :
	Object.freeze (JSON.parse (
		'{"' +
		replaceInString (decodeURI(
			uriString.slice(1)), uriMap.from
		) +	'}'
	))

const replaceInString = (string, replaceMap) =>
	Object.entries(replaceMap).reduce (
		(acc, val) => acc.split(val[0]).join(val[1]),
		string
	)

onload = onhashchange = _ => {
	location.hash = toUri (drawSpiraly (
		Object.assign ({}, defaults, fromUri (location.hash)))
	)
}

const defaults = {
	angle: phi / 2,
	po2: 12
}
