import {
	type Accessor,
	type Component,
	type JSX,
	type Setter,
	createContext,
	createSignal,
	useContext,
} from "solid-js";

type ScrollContextProps = {
	children: JSX.Element;
};

type ScrollContextType = {
	activeSection: Accessor<number | null>;
	setActiveSection: Setter<number | null>;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: Component<ScrollContextProps> = (props) => {
	const [activeSection, setActiveSection] = createSignal<number | null>(null);

	return (
		<ScrollContext.Provider value={{ activeSection, setActiveSection }}>
			{props.children}
		</ScrollContext.Provider>
	);
};

export const useScrollContext = (): ScrollContextType => {
	const context = useContext(ScrollContext);

	if (!context) {
		throw new Error("useScrollContext must be used within a ScrollProvider");
	}

	return context;
};
