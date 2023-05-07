---
to: src/widgets/<%=name %>/index.tsx
force: true
---
import React, {FC} from 'react';
import <%=Name%>Presenter from './presenter';

interface I<%=Name%>Container {
}
const <%=Name%>Container: FC<I<%=Name%>Container> = ({

}: I<%=Name%>Container) => {
    return < <%= Name %>Presenter />;
}

export default <%=Name%>Container;