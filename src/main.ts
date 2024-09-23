// ### What rule do you want to change?
//
// func-style
//
// ### What change do you want to make?
//
// Generate fewer warnings
//
// ### How do you think the change should be implemented?
//
// A new default behavior
//
// ### Example code
//
// ```ts
// import type { LayoutServerLoad } from './$types.js'
//
// interface OutputData {
// 	readonly jwt: string | undefined
// }
//
// export const load: LayoutServerLoad<OutputData> = ({ cookies, params }) => {
// 	const jwt = cookies.get(`${params.site}_jwt`)
// 	return { jwt }
// }
// ```
//
// ### What does the rule currently do for this code?
//
// Creates an impossible situation where a type annotation is required for a function (ex: Express handlers) but forbidden by the code style
//
// ### What will the rule do after it's changed?
//
// #### Fail
//

export const badFunc = function (): void {
	// …
}

export const badLambda = (): void => {
	// …
}

//
// #### Pass
//

export function goodFunc(): void {
	// …
}

export const goodTypedFunc: SomeType = function () {
	// …
}

export const goodTypedLambda: SomeType = () => {
	// …
}

//
// ### Participation
//
// - [ ] I am willing to submit a pull request to implement this change.
//
// ### Additional comments
//
// * https://github.com/typescript-eslint/typescript-eslint/issues/8488
//
// > If someone wants to ask upstream that would be the first step here. No need for an option, IMO, just a simple implementation of "if the option is 'function declarations' and the variable declaration has a type annotation - ignore it" would probably suffice.

/** The type of a function that a library might expect. For example, a library
 * might export `handle(handler: SomeType)`. In this case, one might want to
 * declare that `handler` separately and give it a type to make sure it matches
 * what the library expects. */
type SomeType = () => void
