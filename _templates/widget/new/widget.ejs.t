---
to: src/widgets/<%=name %>/index.tsx
---
<%= interfaceName = "I"+Name %>
import React from 'react'

interface <%=interfaceName%> {
}
const <%=Name%>: FC = ({

}: <%=interfaceName%>) => {
    return (
        <>

        </>
    );
}

export default <%=Name%>;