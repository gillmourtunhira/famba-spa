/* src/App.svelte generated by Svelte v3.36.0 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import Header from "./componets/Header.svelte.js";
import Container from "./componets/Container.svelte.js";

function create_fragment(ctx) {
	let div;
	let header;
	let t0;
	let container;
	let t1;
	let p;
	let current;
	header = new Header({});
	container = new Container({});

	return {
		c() {
			div = element("div");
			create_component(header.$$.fragment);
			t0 = space();
			create_component(container.$$.fragment);
			t1 = space();
			p = element("p");
			p.textContent = "Hello Good Svelte";
			attr(div, "class", "App");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(header, div, null);
			append(div, t0);
			mount_component(container, div, null);
			append(div, t1);
			append(div, p);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			transition_in(container.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(header.$$.fragment, local);
			transition_out(container.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(header);
			destroy_component(container);
		}
	};
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default App;