---
to: src/components/<%=name %>/index.tsx
---
<%= interfaceName = "I"+name %>
import React from 'react'

interface <%=interfaceName%> {
}
const <%=Name%>: FC = ({

}: <%=interfaceName%>) => {
    return <></>;
}

export default <%=Name%>;